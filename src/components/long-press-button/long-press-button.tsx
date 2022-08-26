import { Component, Element, State, h, EventEmitter, Event } from '@stencil/core';
import { createGesture } from '@ionic/core';

@Component({
  tag: 'long-press-button',
  styleUrl: 'long-press-button.css',
  shadow: true,
})
export class LongPressButton {
  @Element() el: HTMLElement;

  @State() longPressActive = false;
  @State() time = 0;

  @Event() longPress: EventEmitter<void>;

  private size = 100;
  private strokeWidth = 5;
  private radius = this.size / 2 - this.strokeWidth / 2;
  private circumference = 2 * this.radius * Math.PI;

  private duration = 3000;

  connectedCallback() {
    const gesture = createGesture({
      el: this.el,
      threshold: 0,
      gestureName: 'long-press',
      onStart: () => {
        console.log('gesture started');
        this.longPressActive = true;
        this.increaseTime();
      },
      onEnd: () => {
        console.log('gesture ended');
        this.longPressActive = false;
        this.time = 0;
      },
    });
    gesture.enable();
  }

  increaseTime = () => {
    setTimeout(() => {
      if (this.longPressActive && this.time < this.duration) {
        this.time += 10;
        console.log(this.time);
        this.increaseTime();
      } else if (this.time >= this.duration) {
        this.longPress.emit();
      }
    }, 10);
  };

  render() {
    return (
      <div class="container">
        <button>
          <slot></slot>
        </button>
        <svg width={this.size} height={this.size}>
          <circle
            r={this.radius}
            cx="50%"
            cy="50%"
            stroke-width={this.strokeWidth}
            fill="transparent"
            stroke="rgb(56, 95, 164)"
            stroke-linecap="round"
            stroke-dasharray={this.circumference}
            stroke-dashoffset={this.circumference - (this.time / this.duration) * this.circumference}
          />
        </svg>
      </div>
    );
  }
}
