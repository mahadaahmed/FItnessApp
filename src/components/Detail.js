import React from 'react';
import { Stack, Typography, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      gap="30px"
      sx={{
        mt: '50px',
        p: '20px',
        alignItems: 'center',
        backgroundColor: '#845555',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />

      <Stack
        sx={{
          gap: '24px',
          maxWidth: '400px',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you
          improve your overall performance!
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
