import React from 'react';
import { styled } from '@mui/system';
import SvgIcon from '@mui/material/SvgIcon';

const BadgeContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#81B29A',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
});

const IconWrapper = styled(SvgIcon)({
  fontSize: '16px',
  color: 'white',
});

const Badge = ({ icon: Icon }) => {
  return (
    <BadgeContainer>
      <IconWrapper component={Icon} />
    </BadgeContainer>
  );
};

export default Badge;
