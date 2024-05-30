import { Injectable } from '@angular/core';
import { DayPilot } from 'daypilot-pro-angular';
import { Observable, delay, of } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers(): Observable<UserModel> {
    return of({
      ressources: [
        {
          name: 'Utilisateur n°1',
          id: 'U1',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U1P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U1P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U1P3', capacity: 10 },
            { name: 'Vacances', id: 'U1VAC', capacity: 10 },
          ],
        },
        {
          name: 'Utilisateur n°2',
          id: 'U2',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U2P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U2P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U2P3', capacity: 10 },
            { name: 'Vacances', id: 'U2VAC', capacity: 10 },
          ],
        },
        {
          name: 'Utilisateur n°3',
          id: 'U3',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U3P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U3P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U3P3', capacity: 10 },
            { name: 'Vacances', id: 'U3VAC', capacity: 10 },
          ],
        },
      ],
      events: [
        {
          id: '1',
          resource: 'U1P1',
          start: '2024-05-03',
          end: '2024-05-08',
          text: 'Scheduler Event 1',
          barColor: '#e69138',
        },
        {
          id: '2',
          resource: 'U1P2',
          start: '2024-05-18',
          end: '2024-05-22',
          text: 'Scheduler Event 2',
          barColor: '#e69138',
        },
        {
          id: '3',
          resource: 'U1VAC',
          start: '2024-05-23',
          end: '2024-05-28',
          text: 'Séjour à Londre',
          barColor: '#e69138',
        },
        {
          id: '4',
          resource: 'U2P2',
          start: '2024-05-03',
          end: '2024-05-08',
          text: 'Scheduler Event 1',
          barColor: '#e69138',
        },
        {
          id: '5',
          resource: 'U3P3',
          start: '2024-05-18',
          end: '2024-05-22',
          text: 'Scheduler Event 2',
          barColor: '#e69138',
        },
      ],
    });
  }

  getRessources(): Observable<DayPilot.ResourceData[]> {
    return of([
      {
        name: 'Utilisateur n°1',
        id: 'U1',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U1P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U1P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U1P3', capacity: 10 },
          { name: 'Vacances', id: 'U1VAC', capacity: 10 },
        ],
      },
      {
        name: 'Utilisateur n°2',
        id: 'U2',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U2P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U2P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U2P3', capacity: 10 },
          { name: 'Vacances', id: 'U2VAC', capacity: 10 },
        ],
      },
      {
        name: 'Utilisateur n°3',
        id: 'U3',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U3P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U3P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U3P3', capacity: 10 },
          { name: 'Vacances', id: 'U3VAC', capacity: 10 },
        ],
      },
    ]);
  }

  getEvents(): Observable<DayPilot.EventData[]> {
    return of([
      {
        id: '1',
        resource: 'U1P1',
        start: '2024-05-03',
        end: '2024-05-08',
        text: 'Scheduler Event 1',
        barColor: '#e69138',
      },
      {
        id: '2',
        resource: 'U1P2',
        start: '2024-05-18',
        end: '2024-05-22',
        text: 'Scheduler Event 2',
        barColor: '#e69138',
      },
      {
        id: '3',
        resource: 'U1VAC',
        start: '2024-05-23',
        end: '2024-05-28',
        text: 'Séjour à Londre',
        barColor: '#e69138',
      },
      {
        id: '4',
        resource: 'U2P2',
        start: '2024-05-03',
        end: '2024-05-08',
        text: 'Scheduler Event 1',
        barColor: '#e69138',
      },
      {
        id: '5',
        resource: 'U3P3',
        start: '2024-05-18',
        end: '2024-05-22',
        text: 'Scheduler Event 2',
        barColor: '#e69138',
      },
    ]);
  }
}
