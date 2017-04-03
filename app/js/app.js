import riot     from 'riot';
import list     from './components/list.tag';
import myheader   from './components/myheader.tag';
import myfooter   from './components/myfooter.tag';

riot.mount('myheader', {title: 'My Title'});
riot.mount('list', {
  title: 'The item title',
  items: [
    { title: 'Avoid excessive caffeine', done: true },
    { title: 'Hidden item',  hidden: true },
    { title: 'Be less provocative'  },
    { title: 'Be nice to people' }
  ]
})
riot.mount('myfooter', {title: 'the footer title', text: 'I am coolio'})