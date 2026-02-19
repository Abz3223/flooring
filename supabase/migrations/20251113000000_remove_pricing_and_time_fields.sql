/*
  # Remove Pricing and Time-Related Fields

  ## Changes Made

  1. Leads Table Updates
    - Drop `budget_range` column from leads table

  2. FAQ Updates
    - Delete pricing and time-related FAQs
    - Update remaining FAQs to remove time and price references

  3. Notes
    - Data safety: Using IF EXISTS checks
    - Existing data preserved where applicable
    - Non-destructive updates for important data
*/

-- Drop budget_range column from leads table
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'budget_range'
  ) THEN
    ALTER TABLE leads DROP COLUMN budget_range;
  END IF;
END $$;

-- Delete pricing-related FAQs
DELETE FROM faqs
WHERE question LIKE '%much does%cost%'
   OR question LIKE '%price%'
   OR question LIKE '%pricing%'
   OR question LIKE '%budget%'
   OR answer LIKE '%$%per sq%'
   OR answer LIKE '%$%per square%';

-- Delete time-related FAQs
DELETE FROM faqs
WHERE question LIKE '%long does%take%'
   OR question LIKE '%how quickly%'
   OR question LIKE '%timeline%'
   OR answer LIKE '%2-5 days%'
   OR answer LIKE '%within%days%';

-- Update remaining FAQ to remove time references if any
UPDATE faqs
SET answer = REPLACE(answer, 'We typically respond within 24 hours.', 'We will respond to your inquiry promptly.')
WHERE answer LIKE '%24 hours%';

UPDATE faqs
SET answer = REPLACE(answer, 'Most projects take 2-5 days.', 'Project duration varies based on scope.')
WHERE answer LIKE '%2-5 days%';
