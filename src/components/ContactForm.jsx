/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Typography } from '@mui/material';
import Reveal from 'react-reveal/Reveal';
import '../styles/form.css';

const ContactForm = () => {
	const [state, handleSubmit] = useForm('mrgjopne');

	return (
		<Reveal effect="fadeInUp">

			<Box className="form-container" mb="46px" mt="46px">
				<Typography
					variant="h3"
					color="#454f59"
					background="#fff"
				>
          Get in touch
				</Typography>
				<form className="form" onSubmit={handleSubmit}>
					<label htmlFor="name">
            Full Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Enter your full name here"
						required
					/>
					<ValidationError
						prefix="Name"
						field="name"
						errors={state.errors}
					/>
					<label htmlFor="email">
            Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Enter your email"
						required
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
						required
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<input type="submit" aria-label="submit" value={state.submitting ? 'SUBMITTING' : 'SUBMIT' } />
				</form>
			</Box>
		</Reveal>
	);
};

export default ContactForm;