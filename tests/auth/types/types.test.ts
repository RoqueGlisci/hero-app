import { types } from "../../../src/auth/types/types"

describe('Prueba de types.ts', () => {
    test('deve de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})

// describe('', () => {
//     test('deve de ', () => {
        
//     })
// })
   