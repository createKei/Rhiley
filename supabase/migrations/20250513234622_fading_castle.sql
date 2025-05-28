/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with time zone)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `package` (text)
      - `requested_date` (timestamp with time zone)
      - `status` (text)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for authenticated users to read their own bookings
    - Add policy for authenticated users to create bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  package text NOT NULL,
  requested_date timestamptz,
  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL AND email = auth.jwt()->>'email');

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Public can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);