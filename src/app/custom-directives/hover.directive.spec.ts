import { HoverDirective } from './hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    const element = document.createElement('div');
    const el = new ElementRef(element);

    // Mock the Renderer2
    const rendererSpy = jasmine.createSpyObj('Renderer2', ['setStyle']);

    // Now create the directive instance with the mocked renderer
    const directive = new HoverDirective(el, rendererSpy);

    // Test if the directive instance is created successfully
    expect(directive).toBeTruthy();
  });
});
