import plugin from 'tailwindcss/plugin.js'

const gridAuto = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'cols-auto': (n) => ({
          'grid-template-columns': `repeat(${n},auto)`
        }),
        'rows-auto': (n) => ({
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

export default gridAuto
