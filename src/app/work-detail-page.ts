import { NgStyle } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findWorkById, works } from './work-catalog';

@Component({
  selector: 'app-work-detail-page',
  imports: [NgStyle, RouterLink],
  templateUrl: './work-detail-page.html',
  styleUrl: './work-detail-page.css'
})
export class WorkDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);

  readonly workId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('id') ?? '' }
  );

  readonly work = computed(() => findWorkById(this.workId()) ?? null);

  readonly relatedWorks = computed(() => {
    const current = this.work();
    if (!current) {
      return [];
    }

    return works
      .filter((item) => item.category === current.category && item.id !== current.id)
      .slice(0, 3);
  });

  readonly nextWork = computed(() => {
    const current = this.work();
    if (!current) {
      return null;
    }

    const currentIndex = works.findIndex((item) => item.id === current.id);
    return works[(currentIndex + 1) % works.length] ?? null;
  });

  readonly detailImage = computed(() => {
    const current = this.work();
    if (!current || !current.imageUrl) {
      return null;
    }

    return {
      url: current.imageUrl,
      alt: current.imageAlt ?? current.title,
      caption: current.imageCaption ?? ''
    };
  });

  readonly themeVars = computed(() => {
    const current = this.work();
    if (!current) {
      return {};
    }

    return {
      '--detail-paper': current.palette.paper,
      '--detail-wash': current.palette.wash,
      '--detail-glow': current.palette.glow,
      '--detail-accent': current.palette.accent,
      '--detail-deep': current.palette.deep,
      '--detail-moss': current.palette.moss
    };
  });

  constructor() {
    effect(() => {
      const current = this.work();
      this.title.setTitle(
        current ? `${current.title} | Elena Arvigo` : 'Opera non trovata | Elena Arvigo'
      );
    });
  }
}
