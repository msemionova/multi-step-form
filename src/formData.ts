const formData = [
  {
    name: 'Your info',
    title: 'Personal info',
    subtitle: 'Please provide your name, email address, and phone number.',
    fieldGroups: [
      {
        type: 'inputs',
        fields: [
          {
            type: 'text',
            label: 'Name',
            placeholder: 'John Doe'
          },
          {
            type: 'email',
            label: 'Email Address',
            placeholder: 'johndoe@email.com'
          },
          {
            type: 'tel',
            label: 'Phone Number',
            placeholder: 'e.g. +1 234 567 890'
          }
        ]
      }
    ],
    buttons: {
      backBtnText: '',
      nextBtnText: 'Next Step'
    }
  },
  {
    name: 'Select plan',
    title: 'Select your plan',
    subtitle: 'You have the option of monthly or yearly billing.',
    fieldGroups: [
      {
        type: 'plans',
        fields: [
          {
            iconType: 'arcade',
            name: 'Arcade',
            priceMonthly: 9,
            priceYearly: 90,
            currency: 'USD'
          },
          {
            iconType: 'advanced',
            name: 'Advanced',
            priceMonthly: 12,
            priceYearly: 120,
            currency: 'USD'
          },
          {
            iconType: 'pro',
            name: 'Pro',
            priceMonthly: 15,
            priceYearly: 150,
            currency: 'USD'
          }
        ]
      }
    ],
    buttons: {
      backBtnText: 'Go Back',
      nextBtnText: 'Next Step'
    }
  },
  {
    name: 'Add-ons',
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
    fieldGroups: [
      {
        type: 'addons',
        fields: [
          {
            title: 'Online service',
            description: 'Access to multiplayer games',
            priceMonthly: 1,
            priceYearly: 10,
            currency: 'USD'
          },
          {
            title: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            priceMonthly: 2,
            priceYearly: 20,
            currency: 'USD'
          },
          {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            priceMonthly: 2,
            priceYearly: 20,
            currency: 'USD'
          }
        ]
      }
    ],
    buttons: {
      backBtnText: 'Go Back',
      nextBtnText: 'Next Step'
    }
  },
  {
    name: 'Summary',
    title: 'Finishing up',
    subtitle: 'Double-check everything looks OK before confirming.',
    type: 'summary',
    buttons: {
      backBtnText: 'Go Back',
      nextBtnText: 'Confirm'
    }
  },
  {
    name: 'Thank you!',
    title: 'Thank you!',
    subtitle: `Thanks for confirming your subscription! We hope you have fun using our platform.
      If you ever need support, please feel free to email us at support@loremgaming.com.`,
    type: 'thanks'
  }
];

export default formData;
