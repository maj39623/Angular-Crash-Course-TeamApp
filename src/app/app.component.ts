import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // State
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    //if you add empty string it does not add to state it throws error
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }

    const allMembers = [...this.members];

    for (let i = 0; i < this.numberOfTeams; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      const member = allMembers.splice;
    }
  }
}

/* //Team Logic: 
store number of teams in state, create an array for each team, 
create a random index starting from 0 index of list of name to n-1, 
push random index(name) into first array and remove from original name array, repeat random index,
insert into second array and delete from name array, once you have name in each array check if there
is still names in original array*/
