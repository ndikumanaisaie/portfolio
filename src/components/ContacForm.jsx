import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TextField, Button, Stack, Box, Typography } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import '../styles/form.css';

export const ContacForm = () => {
  const [state, handleSubmit] = useForm("mrgjopne");

  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <Box className="form-container" mb="46px">
    	<Typography
				variant="h3"
				color="#ddd"
        background="#fff" 
			>
        Get in touch
			</Typography>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text" 
          name="email"
          placeholder="Enter your email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <input type="submit" aria-label="submit" value={state.submitting ? 'SUBMITTING' : 'SUBMIT' } />
      </form>
    </Box>
  );
};
