import styled from 'styled-components/native';

export const TextView = styled.Text`
  color: ${props => props.color || 'white'};
  font-size: 24px;
`;

export const H1 = styled(TextView)`
  font-size: 48px;
`;

export const H2 = styled(TextView)`
  font-size: 36px;
`;

export const Paragraph = styled(TextView)`
  font-size: 16px;
`;
