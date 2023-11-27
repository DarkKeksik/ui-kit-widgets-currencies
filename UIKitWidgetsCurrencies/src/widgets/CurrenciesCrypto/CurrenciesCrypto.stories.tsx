import CurrenciesCrypto from './CurrenciesCrypto'

const meta = {
  component: CurrenciesCrypto,
  title: 'widget for currencies (crypto)',
  tags: ['autodocs'],
}

export default meta

export const DefaultProps = {
  args: {
    isWidgetTitle: true,
    hasStatisticBlock: true,
    dataCurrenciesCrypto: [
      {
        name: 'Bitcoin',
        abbreviation: 'BTC/EUR',
        price: 33.839,
        change: '+3%'
      },
      {
        name: 'Ethereum',
        abbreviation: 'ETH/EUR',
        price: 1781.15,
        change: '+1%'
      },
      {
        name: 'Tether USDt',
        abbreviation: 'TRX/EUR',
        price: 0.09351,
        change: '+6%'
      },
      {
        name: 'Bitcoin',
        abbreviation: 'BTC/EUR',
        price: 33.839,
        change: '+3%'
      },
      {
        name: 'Ethereum',
        abbreviation: 'ETH/EUR',
        price: 1781.15,
        change: '+1%'
      },
      {
        name: 'Tether USDt',
        abbreviation: 'TRX/EUR',
        price: 0.09351,
        change: '+6%'
      },
    ],
    dataCurrenciesStable: [
      {
        name: 'Russian ruble',
        abbreviation: 'RUB'
      },
      {
        name: 'United States dollar',
        abbreviation: 'USD'
      },
      {
        name: 'Euro',
        abbreviation: 'EUR'
      },
      {
        name: 'Pound sterling',
        abbreviation: 'GBP'
      },
      {
        name: 'Turkish lira',
        abbreviation: 'TRY'
      },
    ],
    rowsMax: 5,
    rowsMaxStable: 3,
    rowsMaxCrypto: 3
  },
}

export const CustomProps = {
  args: {
    ...DefaultProps.args,
    widgetTitle: 'Custom name',
    isWidgetTitle: true,
    rowsMaxStable: 2,
    rowsMaxCrypto: 2,
    size: 'm'
  },
}

