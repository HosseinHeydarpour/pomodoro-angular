import { Service } from '@angular/core';

@Service()
export class PomodoroService {
  playPomodoroFinishedSound() {
    const audio = new Audio('/sounds/pomo-finished.wav');

    // 3. Adding .catch() helps debug if the browser blocks the audio
    audio.play().catch((err) => console.error('Error playing pomo sound:', err));
  }

  playBreakFinishedSound() {
    const audio = new Audio('/sounds/break-finish.wav');

    audio.play().catch((err) => console.error('Error playing break sound:', err));
  }
}
