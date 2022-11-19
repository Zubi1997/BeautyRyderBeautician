module.exports = {
  ManageBarberData: [
    {
      id: 1,
      name: 'Santos Botsford',
      active: false,
    },
    {
      id: 1,
      name: 'Mattie Konopelski',
      active: true,
    },
    {
      id: 1,
      name: 'Kelly Goodwin',
      active: false,
    },
    {
      id: 1,
      name: 'Yvette Dicki',
      active: true,
    },
  ],
  TimeData: [
    {
      id: 1,
      day: 'SUNDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 2,
      day: 'MONDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 3,
      day: 'TUESDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 4,
      day: 'WEDNESDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 5,
      day: 'THURSDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 6,
      day: 'FRIDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
    {
      id: 7,
      day: 'SATURDAY',
      from: '10:00 am',
      to: '10:00 pm',
    },
  ],
  CONTENT: [
    {
      isExpanded: false,
      category_name: 'Hair cut',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Beard',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Facials',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Hair color',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Manicure',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Pedicure',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Waxing',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Threading',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Massage',
      subcategory: [
        { val: 'Short', sub: '20 min', price: '$30' },
        { val: 'Medium', sub: '15 min', price: '$25' },
        { val: 'Tuner', sub: '35 min', price: '$35' },
        { val: 'Special', sub: '40 min', price: '$40' },
      ],
    },
  ],
  timeData: [
    { name: 'Monday', time: '10:00 am - 10:00 pm' },
    { name: 'Tuesday', time: '10:00 am - 10:00 pm' },
    { name: 'Wednesday', time: '10:00 am - 10:00 pm' },
    { name: 'Thursday', time: '10:00 am - 10:00 pm' },
    { name: 'Friday', time: '10:00 am - 10:00 pm' },
    { name: 'Saturday', time: '10:00 am - 10:00 pm' },
    { name: 'Sunday', time: '10:00 am - 10:00 pm' },
  ],
  bankData: [
    { bankName: 'HDFC Bank', CardNo: 'XXXXXXXX3300', name: 'Jonathan Dave' },
    { bankName: 'HDFC Bank', CardNo: 'XXXXXXXX3300', name: 'Dave Jonathan' },
    { bankName: 'HDFC Bank', CardNo: 'XXXXXXXX3300', name: 'Americo Dave' },
  ],
  serviceData: [
    { label: 'HAIR CUT', value: 'HairCut' },
    { label: 'BEARD', value: 'Beard' },
    { label: 'FACIALS', value: 'Facial' },
    { label: 'HAIR COLOR', value: 'Hair Color' },
    { label: 'MANICURE', value: 'Manicure' },
    { label: 'PEDICURE', value: 'Pedicure' },
    { label: 'WAXING', value: 'Waxing' },
    { label: 'THREADING', value: 'Threading' },
    { label: 'MASSAGE', value: 'Masagge' },
    { label: 'Cut & Shampoo', value: 'Cut & Shampoo' },
    { label: 'Kids Cut', value: 'Kids Cut' },
    { label: 'Brow Wax', value: 'Brow Wax' },
  ],
  AppointmentData: [
    {
      id: 1,
      name: 'Dennis Harber',
      date: 'Fri,12 Jun',
      time: '2Pm- 3Pm',
      coverImg: require('../assets/img/Appoiment/user.jpg'),
      alocateTime: '60 min',
      charge: '143.16',
      serviceTitle: 'Total Services',
      serviceCount: '2',

    },
    {
      id: 2,
      name: 'Harber Dennis',
      date: 'Fri,12 Jun',
      time: '4Pm- 5Pm',
      coverImg: require('../assets/img/Appoiment/user.jpg'),
      alocateTime: '30 min',
      charge: '143.16',
      serviceTitle: 'Total Services',
      serviceCount: '3',

    },
    {
      id: 3,
      name: 'Mane Beutilocks',
      date: 'Fri,12 Jun',
      time: '2Pm- 3Pm',
      coverImg: require('../assets/img/Appoiment/user.jpg'),
      alocateTime: '60 min',
      charge: '143.16',
      serviceTitle: 'Total Services',
      serviceCount: '2',

    },

  ],
  dropData: [
    {
      id: 1,
      value: 'Cancel',
      reason: 'Why you Cancel ?'
    },
    {
      id: 2,
      value: 'Problem',
      reasom: 'what your problem?'
    },
    { id: 3, value: 'Other', reason: 'Other' }
  ],
  bankName: [
    { label: 'HDFC Bank', value: 'HDFC' },
    { label: 'Kotak Mahendra Bank', value: 'KOTAK' },
    { label: 'Axis Bank', value: 'AXIS' },
  ],
  blogData: [
    {
      id: 0,
      name: 'Javed Habib',
      dollar: '-$120.00',
      nameshop: '21 Best Hand Creams to Save Your Dry, Cracked Skin',
      date: 'Apr 14.02:30 pm ',

    day: '15 days ago',
    info1: 'Whether you want to look younger or embrace your age, these haircuts will make you Whether you want to look younger or embrace your age',
      info: 'Whether you want to look younger or embrace your age, these haircuts will make you....',
      image: [
        'https://source.unsplash.com/1024x768/?BeautySalon',
        'https://source.unsplash.com/1024x768/?hairsalon',
        'https://source.unsplash.com/1024x768/?barber',
        'https://source.unsplash.com/1024x768/?hairDresser',
      ],
      Title: '1. Know your hair type',
      Text1:
        'Getting to know your hair can prevent you from wreaking havoc on innocent strands. So, before you pick up a heating tool or brush, learn to distinguish your hair type. Hair typically falls under two categories: Fine and thick.',
      Text2:
        'Your hair is fine if a single strand is hard to see; you struggle with maintaining volume; and locks never feel heavy. You have fewer strands, which are super skinny.',
      Image: require('../assets/images/BlogInternalImage.png'),
      Text3:
        'Your hair is thick if it feels coarser; bobby pins can’t hold styles in place; and your biggest problem is taming frizz. You seem to have an infinite amount of strands and they weigh a ton.',
    },
    {
      id: 1,
      name: 'Javed Habib',
      dollar: '-$120.00',
      nameshop: '21 Best Hand Creams to Save Your Dry, Cracked Skin',
      date: ' Apr 14.02:30 pm ',
      day: '15 days ago',
    info1: 'Whether you want to look younger or embrace your age, these haircuts will make you Whether you want to look younger or embrace your age',
      info: 'debit Whether you want to look younger or embrace your age, these haircuts will make you....',
      image: [
        'https://source.unsplash.com/1024x768/?BeautySalon',
        'https://source.unsplash.com/1024x768/?hairsalon',
        'https://source.unsplash.com/1024x768/?barber',
        'https://source.unsplash.com/1024x768/?hairDresser',
      ],

      Title: '1. Know your hair type',
      Text1:
        'Getting to know your hair can prevent you from wreaking havoc on innocent strands. So, before you pick up a heating tool or brush, learn to distinguish your hair type. Hair typically falls under two categories: Fine and thick.',
      Text2:
        'Your hair is fine if a single strand is hard to see; you struggle with maintaining volume; and locks never feel heavy. You have fewer strands, which are super skinny.',
      Image: require('../assets/images/BlogInternalImage.png'),
      Text3:
        'Your hair is thick if it feels coarser; bobby pins can’t hold styles in place; and your biggest problem is taming frizz. You seem to have an infinite amount of strands and they weigh a ton.',
    },
    {
      id: 2,
      name: 'Javed Habib',
      dollar: '-$420.00',
      nameshop: '21 Best Hand Creams to Save Your Dry, Cracked Skin',
      date: 'Apr 14.02:30 pm ',
      day: '15 days ago',
    info1: 'Whether you want to look younger or embrace your age, these haircuts will make you Whether you want to look younger or embrace your age',
      info: 'debit Whether you want to look younger or embrace your age, these haircuts will make you....',
      image: [
        'https://source.unsplash.com/1024x768/?BeautySalon',
        'https://source.unsplash.com/1024x768/?hairsalon',
        'https://source.unsplash.com/1024x768/?barber',
        'https://source.unsplash.com/1024x768/?hairDresser',
      ],
      Title: '1. Know your hair type',
      Text1:
        'Getting to know your hair can prevent you from wreaking havoc on innocent strands. So, before you pick up a heating tool or brush, learn to distinguish your hair type. Hair typically falls under two categories: Fine and thick.',
      Text2:
        'Your hair is fine if a single strand is hard to see; you struggle with maintaining volume; and locks never feel heavy. You have fewer strands, which are super skinny.',
      Image: require('../assets/images/BlogInternalImage.png'),
      Text3:
        'Your hair is thick if it feels coarser; bobby pins can’t hold styles in place; and your biggest problem is taming frizz. You seem to have an infinite amount of strands and they weigh a ton.',
    },
    {
      id: 3,
      name: 'Javed Habib',
      dollar: '-$220.00',
      nameshop: '21 Best Hand Creams to Save Your Dry, Cracked Skin',
      date: 'Apr 14.02:30 pm ',
      day: '15 days ago',
    info1: 'Whether you want to look younger or embrace your age, these haircuts will make you Whether you want to look younger or embrace your age',
      info: 'debit Whether you want to look younger or embrace your age, these haircuts will make you....',
      image: [
        'https://source.unsplash.com/1024x768/?BeautySalon',
        'https://source.unsplash.com/1024x768/?hairsalon',
        'https://source.unsplash.com/1024x768/?barber',
        'https://source.unsplash.com/1024x768/?hairDresser',
      ],
      Title: '1. Know your hair type',
      Text1:
        'Getting to know your hair can prevent you from wreaking havoc on innocent strands. So, before you pick up a heating tool or brush, learn to distinguish your hair type. Hair typically falls under two categories: Fine and thick.',
      Text2:
        'Your hair is fine if a single strand is hard to see; you struggle with maintaining volume; and locks never feel heavy. You have fewer strands, which are super skinny.',
      Image: require('../assets/images/BlogInternalImage.png'),
      Text3:
        'Your hair is thick if it feels coarser; bobby pins can’t hold styles in place; and your biggest problem is taming frizz. You seem to have an infinite amount of strands and they weigh a ton.',
    },
  ],
  Icons: [
    require('../assets/images/Tool1.png'),
    require('../assets/images/Tool2.png'),
    require('../assets/images/Tool3.png'),
    require('../assets/images/Tool4.png'),
    require('../assets/images/Tool5.png'),
    require('../assets/images/Tool6.png'),
    require('../assets/images/Tool7.png'),
    require('../assets/images/Tool8.png'),
    require('../assets/images/Tool9.png'),
    require('../assets/images/Tool10.png'),
    require('../assets/images/Tool11.png'),
    require('../assets/images/Tool12.png'),
    require('../assets/images/Tool13.png'),
  ],
  homeData: [
    {
      image: require('../assets/images/TodayAppoinment.png'),
      name: ('Mane BeutiLocks'),
      date: ('Sat,20 Aug'),
      time: '07:00 PM',
    },
    {
      image: require('../assets/images/TodayAppoinment2.png'),
      name: ('Mane BeutiLocks'),
      date: ('Sat,20 Aug'),
      time: '07:00 PM',
    },
  ],
  EarningsData : [
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Miss George Padberg',
      money: '+$1720.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Trevor Franecki',
      money: '-$105.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Tomas OKeefe',
      money: '+$40.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Withdrawal',
      money: '-$240.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Nick Lynch',
      money: '-$2520.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Dave Kunde',
      money: '+$6420.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Robert Fox',
      money: '-$320.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
    {
      date: 'Apr 14 . 02:30pm',
      name: 'Darlene Robertson',
      money: '+$720.00',
      image: require('../assets/images/TodayAppoinment.png'),
    },
  ],
  TranscData:[
    {title: ('Transaction ID'), text: 'ABC123456789'},
    {title:('Date & Time'), text: 'Apr 20, 8:44PM'},
    {title:('Item Total'), text: '$110.00'},
    {title: ('Vat tax'), text: '$3.08'},
    {title: ('Coupon Discount'), text: '-$02.08'},
  ],
  NotificationData:[
    {
      image: require('../assets/images/HomeNotificationTrue.png'),
      title: ('APPO_BOOK'),
      text: 'How to choose the right customer for your photo business?',
      time: '5m ago',
    },
    {
      image: require('../assets/images/HomeNotificationFalse.png'),
      title: 'AAPPO_CANCEL',
      text: 'How to choose the right customer for your photo business?',
      time: '15m ago',
    },
    {
      image: require('../assets/images/HomeNotificationBoth.png'),
      title: 'APPO_RESCHEDULE',
      text: 'How to choose the right customer for your photo business?',
      time: '15m ago',
    },
  ],
  dayData:[
    { Day: ('Monday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Tuesday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Wednesday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Thursday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Friday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Saturday'), Time: '10:00 am - 10:00 pm' },
    { Day: ('Sunday'), Time: '10:00 am - 10:00 pm' },
  ],
  ddServiceData:[
    { label: 'High Salon', value: 'HIGH' },
    { label: 'Medium Salon', value: 'MEDIUM' },
    { label: 'Low Salon', value: 'LOW' },
  ],
  GalleryImg:[
    require('../assets/images/bar.jpg'),
    require('../assets/images/bar1.jpg'),
    require('../assets/images/bar2.jpg'),
    require('../assets/images/bar3.jpg'),
    require('../assets/images/bar4.jpg'),
    require('../assets/images/bar5.jpg'),
    require('../assets/images/bar2.jpg'),
    require('../assets/images/bar3.jpg'),
    require('../assets/images/bar4.jpg'),
    require('../assets/images/bar5.jpg'),
  ]
};
