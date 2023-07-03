import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import chestIcon from '../assets/icons/chest.png'
import absIcon from '../assets/icons/abs.png'
import backIcon from '../assets/icons/back.png'
import lowerLegsIcon from '../assets/icons/calf.png'
import cardioIcon from '../assets/icons/cardio.png'
import lowerArmsIcon from '../assets/icons/lowerarms.png'
import upperArmsIcon from '../assets/icons/upperarms.png'
import shouldersIcon from '../assets/icons/shoulders.png'
import upperLegsIcon from '../assets/icons/upperlegs.png'
import neckIcon from '../assets/icons/neck.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  let icon;

  // Assign the corresponding icon based on the body part
  switch (item) {
    case 'back':
      icon = backIcon;
      break;
    case 'cardio':
      icon = cardioIcon;
      break;
    case 'chest':
      icon = chestIcon;
      break;
    case 'lower arms':
      icon = lowerArmsIcon;
      break;
    case 'lower legs':
      icon = lowerLegsIcon;
      break;
    case 'neck':
      icon = neckIcon;
      break;
    case 'shoulders':
      icon = shouldersIcon;
      break;
    case 'upper arms':
      icon = upperArmsIcon;
      break;
    case 'waist':
      icon = absIcon;
      break;
    case 'upper legs':
      icon = upperLegsIcon;
      break;
    default:
      icon = Icon;
  }

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={icon} alt={item} style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};

export default BodyPart;
