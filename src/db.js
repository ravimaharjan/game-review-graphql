
const games = [
    { id: "53a0724c-a416-4cac-ae45-bfaedce1f147", name: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
    { id: "c2af9adc-d0b8-4d44-871f-cef66fz6f7f6", name: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
    { id: '4taf9adc-d0b8-dd44-871f-cffbbf86f7vg', name: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
    { id: 'fgaf9adc-d0b8-ade4-871f-34f12f86f7mn', name: 'Mario Kart', platform: ['Switch'] },
    { id: '56af9adc-d0b8-aa4g-871f-cef66f86f7ap', name: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] },
]


const authors = [
    { id: '2c931e7e-510f-49e5-aed6-d6b44087e5a1', name: 'mario', verified: true },
    { id: 'werx1e7e-510f-49e5-a2d4-abb44087e545', name: 'yoshi', verified: false },
    { id: '11931e7e-cc0f-ppe5-zed1-11b44087e5as', name: 'peach', verified: true },
]

const reviews = [
    { id: 'f01bcdec-6783-464e-8f9e-8416830f7569', rating: 9, content: 'lorem ipsum', author_id: '2c931e7e-510f-49e5-aed6-d6b44087e5a1', game_id: '4taf9adc-d0b8-dd44-871f-cffbbf86f7vg' },
    { id: 'bcrx1e7e-510f-49e5-a2d4-abb44087e545', rating: 10, content: 'lorem ipsum', author_id: 'werx1e7e-510f-49e5-a2d4-abb44087e545', game_id: '53a0724c-a416-4cac-ae45-bfaedce1f147' },
    { id: '56cf9adc-d0b8-aa4g-871f-cef66f86f7ao', rating: 7, content: 'lorem ipsum', author_id: '11931e7e-cc0f-ppe5-zed1-11b44087e5as', game_id: 'c2af9adc-d0b8-4d44-871f-cef66fz6f7f6' },
    { id: '2a931e7e-cc0f-ppe5-zed1-ddb44087e5as', rating: 5, content: 'lorem ipsum', author_id: 'werx1e7e-510f-49e5-a2d4-abb44087e545', game_id: 'c2af9adc-d0b8-4d44-871f-cef66fz6f7f6' },
    { id: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef', rating: 8, content: 'lorem ipsum', author_id: 'werx1e7e-510f-49e5-a2d4-abb44087e545', game_id: 'fgaf9adc-d0b8-ade4-871f-34f12f86f7mn' },
    { id: '47bf3941-9c8b-42c0-9c72-7f3985492a5b', rating: 7, content: 'lorem ipsum', author_id: '2c931e7e-510f-49e5-aed6-d6b44087e5a1', game_id: '56af9adc-d0b8-aa4g-871f-cef66f86f7ap' },
    { id: 'c01b1ff4-f894-4ef2-b27a-22aacc2fca70', rating: 10, content: 'lorem ipsum', author_id: '11931e7e-cc0f-ppe5-zed1-11b44087e5as', game_id: '56af9adc-d0b8-aa4g-871f-cef66f86f7ap' },
]

const db = { games, authors, reviews }
export default db;