"use client";

import { Button, TextField, Typography, Stack, Link } from "@mui/material";
import NextLink from "next/link";

export default function Login() {
  return (
    <Stack direction="column" spacing={2} className="w-full max-w-xs">
      <Typography variant="h4" className="text-center">
        Login
      </Typography>
      <TextField label="Email" type="email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Link
        component={NextLink}
        href="/auth/signup"
        className="self-center text-sm text-gray-500"
      >
        Sign up
      </Link>
    </Stack>
  );
}
