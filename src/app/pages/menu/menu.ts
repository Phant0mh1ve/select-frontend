import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  currentPage = 'Меню';

  activeSection: 'section1' | 'section2' = 'section1';

  section1Items: MenuItem[] = [
    { id: 1, name: 'Аарон Сэмюэлс', value: 10, selected: false },
    { id: 2, name: 'Дженис Иэн', value: 2000, selected: false },
    { id: 3, name: 'Дамиан', value: 1500, selected: false },
    { id: 4, name: 'Кэди Херон', value: 40, selected: false }
  ];

  section2Items: MenuItem[] = [
    { id: 5, name: 'Реджина Джордж', value: 1000, selected: false },
    { id: 6, name: 'Гретхен Винерс', value: 300, selected: false },
    { id: 7, name: 'Карен Смит', value: 200, selected: false }
  ];

  get activeSectionName(): string {
    return this.activeSection === 'section1' ? 'Тип 1' : 'Тип 2';
  }

  get visibleItems(): MenuItem[] {
    return this.activeSection === 'section1'
      ? this.section1Items
      : this.section2Items;
  }

  get selectedCount(): number {
    return this.visibleItems.filter(item => item.selected).length;
  }

  get totalValue(): number {
    return this.visibleItems
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.value, 0);
  }

  resetSection(section: 'section1' | 'section2'): void {
    const items = section === 'section1' ? this.section1Items : this.section2Items;
    items.forEach(item => item.selected = false);
  }

  setSection(section: 'section1' | 'section2'): void {
    this.resetSection(this.activeSection);
    this.activeSection = section;
  }

  get activeSectionImage(): string {
  return this.activeSection === 'section1'
    ? '/mean1.jpg'
    : '/mean2.jpg';
}
}