import admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp(functions.config().firebase)

export const setWord = functions.storage.object().onFinalize(o => {
  if (!o.name) {
    console.error('File not found')
    return null
  }

  const file = admin
    .storage()
    .bucket()
    .file(o.name)
  const fileName = file.name
    .split('/')
    .pop()!
    .split('.')
    .shift()

  file
    .download()
    .then(res => {
      const titles: string[] = res[0]
        .toString()
        .match(/## titles\n\n((.+\n)+)/)![1]
        .trim()
        .split(/\n/)
      const descriptions: string[] = res[0]
        .toString()
        .match(/## descriptions\n\n((.+\n)+)/)![1]
        .trim()
        .split(/\n/)

      admin
        .firestore()
        .collection('words')
        .doc(fileName)
        .set({ titles, descriptions })
    })
    .catch(err => {
      console.error(`File download error fileName=${fileName} err=${err}`)
      return null
    })
})

// export const deleteWord = functions.storage.object().onDelete(o => {}
