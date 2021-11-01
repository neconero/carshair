import { default as responseOne } from './JTHBJ46G182171887.json'
import { default as responseTwo } from './3VWDZ7AJ7BM382452.json'
import { default as responseThree } from './2FMDK3JC4ABA11603.json'

import { default as invalidResponse } from './invalidVin.json'


const getVinResponse = (vin: string) => {
    let expectedResult
    switch (vin) {
        case 'JTHBJ46G182171887':
            expectedResult = getExpectedResult(responseOne.Results[0])
            return { response: { data: responseOne }, expectedResult };
        case '3VWDZ7AJ7BM382452':
            expectedResult = getExpectedResult(responseTwo.Results[0])
            return { response: { data: responseTwo }, expectedResult };
        case '2FMDK3JC4ABA11603':
            expectedResult = getExpectedResult(responseThree.Results[0])
            return { response: { data: responseThree }, expectedResult };
        default:
            expectedResult = getExpectedResult(invalidResponse.Results[0])
            return { response: { data: invalidResponse }, expectedResult };
    }
}

const getExpectedResult = (response: any) => {
    return { Make: response.Make, Model: response.Model, Year: response.ModelYear }
}

export default getVinResponse;




