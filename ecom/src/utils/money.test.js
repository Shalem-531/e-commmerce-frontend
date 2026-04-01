import {it,expect,describe} from 'vitest'
import { formatMoney } from './money'
describe('formatMoney',()=>{
    it("formats 1990 to $19.90",()=>{
        expect(formatMoney(1990)).toBe('$19.90');
         expect(formatMoney(1019)).toBe('$10.19');
    })
    it('displays 2 decimals',()=>{
        expect(formatMoney(1090)).toBe('$10.90');
    })
})