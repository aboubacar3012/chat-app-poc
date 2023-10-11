import { Component } from '@angular/core';

export interface Message {
  sender: string;
  content: string;
  // isBroadcast: boolean;
}

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css'],
})
export class ChatComponentComponent {
  title = 'chat-app';

  conversations = [
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        "Bienvenue sur notre service de location de voiture. Comment puis-je vous aider aujourd'hui ?",
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message:
        "Bonjour, je suis intéressé par la location d'une voiture pour le weekend prochain.",
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        'Bonjour Oumar, je serais ravi de vous aider. Pouvez-vous me préciser vos besoins en termes de voiture et de dates de location ?',
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message:
        'Je recherche une voiture économique pour deux jours, du samedi au dimanche prochain.',
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        'Parfait, je vais vérifier la disponibilité des voitures économiques pour cette période. Où souhaitez-vous récupérer la voiture ?',
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message: "Je souhaite récupérer la voiture à l'aéroport.",
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        "Très bien, je vais vérifier les options à l'aéroport pour vous. Merci de patienter quelques instants.",
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message: "D'accord, je reste en ligne.",
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        "Merci pour votre patience. Nous avons plusieurs voitures économiques disponibles à l'aéroport pour les dates demandées. Avez-vous des préférences de marque ou de modèle ?",
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message:
        "Je n'ai pas de préférences particulières. Une voiture économique de n'importe quelle marque fera l'affaire.",
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        "Très bien. Je vais réserver une voiture économique pour vous à l'aéroport. Veuillez me fournir vos coordonnées pour la réservation.",
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message:
        'Voici mes coordonnées : nom et prénom, numéro de téléphone, adresse email.',
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        "Merci, Oumar. Votre réservation a été confirmée. Vous recevrez un email avec les détails de votre location. Avez-vous d'autres questions ?",
    },
    {
      nom: 'Oumar',
      initial: 'O',
      identifiant: 'client@exemple.com',
      message: "Non, c'est tout. Merci beaucoup pour votre assistance !",
    },
    {
      nom: 'Aboubacar',
      initial: 'A',
      identifiant: 'support@locationvoiture.com',
      message:
        'De rien, Oumar. Nous sommes là pour vous aider. Bonne journée !',
    },
  ];

  message: string = '';

  constructor() {}

  sendMessage(): void {
    if (this.message !== '') {
      this.conversations.push({
        nom: 'Aboubacar',
        initial: 'A',
        identifiant: '',
        message: this.message,
      });
      this.message = '';
    }
  }
}
