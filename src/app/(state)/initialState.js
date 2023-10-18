const initialState = {
  currentStep: 1,
  formFields: {
    name: '',
    email: '',
    phoneNumber: '',
    plans: [
      {
        name: 'Arcade',
        id: 'arcade',
        value: 9,
        selected: true,
      },
      {
        name: 'Advanced',
        id: 'advanced',
        value: 12,
        selected: false,
      },
      {
        name: 'Pro',
        id: 'pro',
        value: 15,
        selected: false,
      }
    ],
    suscriptionYearly: false,
    addOns: [
      {
        name: 'Online service',
        id: 'onlineService',
        selected: true,
        value: 1
      },
      {
        name: 'Larger storage',
        id: 'largerStorage',
        selected: true,
        value: 2
      },
      {
        name: 'Oustomizable profile',
        id: 'CustomizableProfile',
        selected: true,
        value: 2
      },
    ]
  },
}

export default initialState