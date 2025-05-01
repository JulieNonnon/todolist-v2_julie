import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {
  @Input() message: string = ''; // Message à afficher dans la modal
  @Input() isVisible: boolean = false; // Contrôle la visibilité de la modal
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>(); // Événement émis lorsqu'on ferme la modal

  closeModal() {
    this.isVisible = false;
    this.onClose.emit(); // Notifie le parent que la modal est fermée
  }
}
