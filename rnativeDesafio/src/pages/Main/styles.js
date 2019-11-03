import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: ${colors.dark};
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  margin: 14px 0px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  text-transform: uppercase;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, colors.primary)};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
