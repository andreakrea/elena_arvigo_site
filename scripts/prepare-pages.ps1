param(
  [string]$BaseHref = ""
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$repoName = Split-Path -Leaf $projectRoot

if ([string]::IsNullOrWhiteSpace($BaseHref)) {
  $BaseHref = "/$repoName/"
}

if (-not $BaseHref.StartsWith("/")) {
  $BaseHref = "/$BaseHref"
}

if (-not $BaseHref.EndsWith("/")) {
  $BaseHref = "$BaseHref/"
}

$distRoot = Join-Path $projectRoot "dist\elena-arvigo-site\browser"
$docsRoot = Join-Path $projectRoot "docs"

Write-Host "Building site with base href $BaseHref"
Push-Location $projectRoot
try {
  & cmd /c "npm.cmd run build -- --base-href $BaseHref"

  if (-not (Test-Path $distRoot)) {
    throw "Build output not found at $distRoot"
  }

  if (Test-Path $docsRoot) {
    Remove-Item -LiteralPath $docsRoot -Recurse -Force
  }

  New-Item -ItemType Directory -Path $docsRoot | Out-Null
  Copy-Item -Path (Join-Path $distRoot "*") -Destination $docsRoot -Recurse -Force

  $indexPath = Join-Path $docsRoot "index.html"
  if (-not (Test-Path $indexPath)) {
    throw "Expected index.html in $docsRoot after copying the build output"
  }

  Copy-Item -Path $indexPath -Destination (Join-Path $docsRoot "404.html") -Force
  New-Item -ItemType File -Path (Join-Path $docsRoot ".nojekyll") -Force | Out-Null

  Write-Host "GitHub Pages files refreshed in $docsRoot"
}
finally {
  Pop-Location
}
