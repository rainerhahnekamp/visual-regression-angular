import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterTestingModule} from '@angular/router/testing';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {HolidayCardComponent} from './holiday-card.component';

export default {
  title: 'Eternal/HolidayCard',
  component: HolidayCardComponent,
  decorators: [moduleMetadata({imports: [MatButtonModule, MatCardModule, RouterTestingModule]})],
  argTypes: {holiday: {name: 'Holiday', description: 'JSON object for the Holiday'}}
} as Meta;

const Template: Story<HolidayCardComponent> = (args: HolidayCardComponent) => ({
  component: HolidayCardComponent,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  holiday: {
    id: 1,
    title: 'Holiday',
    teaser: 'Experience an Old Empire',
    description: 'A holiday',
    imageUrl: 'https://eternal-app.s3.eu-central-1.amazonaws.com/assets/AngkorWatSmall.jpg',
  }
};
