import { Component } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { EditComponent } from '../../features/edit-component/edit-component';

export const unavedChangesGuard: CanDeactivateFn<EditComponent> = (component: EditComponent) => {

  if(component.hasUnsavedChanges()){
    return (confirm('Hai delle modifiche non salvate. vuoi davvero uscire?'))
  }

  return true;
};
