import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    businessType:yup.string().required(),
    isAgeBracketTargeted:yup.string(),
    isAllIndustriesTargeted:yup.string(),
    isInvestmentFound:yup.string(),
    investmentCost:yup.number()
});