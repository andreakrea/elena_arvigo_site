import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  FilterId,
  filterDescriptions,
  filters,
  productionHighlights,
  profilePoints,
  spotlightItems,
  theatreMoments,
  works,
  awards
} from './work-catalog';

@Component({
  selector: 'app-home-page',
  imports: [NgClass, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  private readonly title = inject(Title);

  readonly filters = filters;
  readonly spotlightItems = spotlightItems;
  readonly theatreMoments = theatreMoments;
  readonly productionHighlights = productionHighlights;
  readonly awards = awards;
  readonly profilePoints = profilePoints;
  readonly selectedFilter = signal<FilterId>('all');

  readonly filteredWorks = computed(() => {
    const activeFilter = this.selectedFilter();
    return activeFilter === 'all'
      ? works
      : works.filter((work) => work.category === activeFilter);
  });

  readonly filterDescription = computed(() => filterDescriptions[this.selectedFilter()]);

  readonly stats = [
    { id: 'film', label: 'Cinema', count: works.filter((work) => work.category === 'film').length },
    { id: 'tv', label: 'Serie TV', count: works.filter((work) => work.category === 'tv').length },
    { id: 'stage', label: 'Teatro', count: works.filter((work) => work.category === 'stage').length },
    {
      id: 'production',
      label: 'Produzione',
      count: works.filter((work) => work.category === 'production').length
    }
  ] as const;

  constructor() {
    this.title.setTitle('Elena Arvigo | Cinema, Serie TV, Teatro');
  }

  setFilter(filter: FilterId): void {
    this.selectedFilter.set(filter);
  }

  isFilterActive(filter: FilterId): boolean {
    return this.selectedFilter() === filter;
  }
}
