/*
  # Add Consent Tracking to Leads Table

  1. Changes
    - Adds consent tracking columns to the leads table
    - Tracks user acceptance of terms and conditions
    - Tracks user consent to share information with contractors
    - Records timestamps and versions for legal compliance

  2. New Columns
    - `accepted_terms` (boolean, required): Whether user accepted Terms & Conditions
    - `accepted_privacy` (boolean, required): Whether user accepted Privacy Policy
    - `consent_to_share` (boolean, required): Whether user consented to share info with contractors
    - `consent_timestamp` (timestamptz): When consent was given
    - `terms_version` (text): Version of T&C accepted (for audit trail)
    - `ip_address` (text): IP address at time of consent (for verification)

  3. Notes
    - All consent fields default to false for safety
    - Timestamps are automatically set
    - Supports Canadian privacy law compliance (PIPEDA)
*/

-- Add consent tracking columns to leads table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'accepted_terms'
  ) THEN
    ALTER TABLE leads ADD COLUMN accepted_terms boolean DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'accepted_privacy'
  ) THEN
    ALTER TABLE leads ADD COLUMN accepted_privacy boolean DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'consent_to_share'
  ) THEN
    ALTER TABLE leads ADD COLUMN consent_to_share boolean DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'consent_timestamp'
  ) THEN
    ALTER TABLE leads ADD COLUMN consent_timestamp timestamptz DEFAULT now();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'terms_version'
  ) THEN
    ALTER TABLE leads ADD COLUMN terms_version text DEFAULT '1.0';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'ip_address'
  ) THEN
    ALTER TABLE leads ADD COLUMN ip_address text;
  END IF;
END $$;
