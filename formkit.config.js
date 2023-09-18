import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        message: 'text-red-500 mb-5',
        wrapper: 'space-y-2 mb-3',
        input: 'w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500',
      },
      text: {
        // message: '$reset text-green-100',
      },
      file: {
        noFiles: 'block py-2',
        fileItem: 'hidden'
      },
      submit: {
        input: '$reset bg-green-400 hover:bg-green-500 w-full p-2 font-bold uppercase disabled:opacity-50'
      }
    })
  }
}

export default config