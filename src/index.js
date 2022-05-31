// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'home',
        triggerEl: document.querySelector('#home-tab-example'),
        targetEl: document.querySelector('#home-example')
    },
    {
        id: 'menu',
        triggerEl: document.querySelector('#menu-tab-example'),
        targetEl: document.querySelector('#menu-example')
    },
    {
        id: 'team',
        triggerEl: document.querySelector('#team-tab-example'),
        targetEl: document.querySelector('#team-example')
    },
    {
        id: 'contact',
        triggerEl: document.querySelector('#contact-tab-example'),
        targetEl: document.querySelector('#contact-example')
    }
  ];
  
  // options with default values
  const options = {
    defaultTabId: 'team',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
  };
  
  /*
  * tabElements: array of tab objects
  * options: optional
  */
  const tabs = new Tabs(tabElements, options);
  
  // shows another tab element
  tabs.show('home');
  
  // get the tab object based on ID
  tabs.getTab('contact')
  
  // get the current active tab object
  tabs.getActiveTab()
  