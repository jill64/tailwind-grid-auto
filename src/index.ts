import plugin from 'tailwindcss/plugin'

const gridAuto = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'auto-cols': (n) => ({
          'grid-template-columns': `repeat(${n},auto)`
        }),
        'auto-rows': (n) => ({
          'grid-template-rows': `repeat(${n},auto)`
        })
      },
      {
        values: theme('gridAuto')
      }
    )
  },
  {
    theme: {
      gridAuto: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9'
      }
    }
  }
)

export = gridAuto
