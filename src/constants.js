export const socialLinks = [
    { text: 'Twitter', href: 'https://twitter.com/SyrianSStory' },
    { text:'LinkedIn', href: 'https://www.linkedin.com/company/syrian-success-story' },
    { text: 'Facebook', href: 'https://www.facebook.com/SyrianSuccessStory' }
  ]

  export const tabs = [
    {
      to: '',
      name: 'Recent Stories'
    }, {
      to: 'stories',
      name: 'All Stories'
    }, {
      to: 'share-story',
      name: 'Share Stories'
    }, {
      to: 'about',
      name: 'About'
    }
  ];

  export const inputs = [{
    id: 'title',
    label: 'Title'
  },
  {
    id: 'imageURL',
    label: 'Image URL'
  }
]

export const types = ['Education','Society','Economy','Art & Culture'];
export const locations = ['Syria','Turkey','Arab Countries','Europe','US & Canada'];
export const owners = ['Individual', 'Group'];

export var time = new Date();
var dd = time.getDate();

var mm = time.getMonth() + 1;
var yyyy = time.getFullYear();
var hh = time.getHours();
var min = time.getMinutes();
if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}
 time =   yyyy + '-' +  mm  +  '-' +  dd + ' ' + hh +':' + min;
