-- ==========================================
-- Luxora Real Estate - Migration from Renture
-- ==========================================

-- 1. Rename cars to properties
ALTER TABLE IF EXISTS cars RENAME TO properties;

-- 2. Update properties table structure
ALTER TABLE properties 
  RENAME COLUMN brand TO type;

ALTER TABLE properties 
  RENAME COLUMN price_per_day TO price;

-- Add real estate specific columns
ALTER TABLE properties 
  ADD COLUMN IF NOT EXISTS bedrooms INT DEFAULT 1,
  ADD COLUMN IF NOT EXISTS bathrooms INT DEFAULT 1,
  ADD COLUMN IF NOT EXISTS sqft DECIMAL(10, 2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS property_status VARCHAR(50) DEFAULT 'Sale'; -- 'Sale' or 'Rent'

-- Update existing column types/names if needed
-- mileage, fuel, transmission, seats are car specific, we can keep them for now or drop them.
-- Better to keep them and reuse or drop later if not needed.
ALTER TABLE properties DROP COLUMN IF EXISTS fuel;
ALTER TABLE properties DROP COLUMN IF EXISTS mileage;
ALTER TABLE properties DROP COLUMN IF EXISTS transmission;
ALTER TABLE properties DROP COLUMN IF EXISTS acceleration;
ALTER TABLE properties DROP COLUMN IF EXISTS top_speed;
ALTER TABLE properties DROP COLUMN IF EXISTS engine;

-- 3. Rename bookings to inquiries
ALTER TABLE IF EXISTS bookings RENAME TO inquiries;

-- 4. Update inquiries table structure
ALTER TABLE inquiries 
  RENAME COLUMN car_id TO property_id;

ALTER TABLE inquiries 
  RENAME COLUMN pickup_date TO preferred_date;

ALTER TABLE inquiries 
  RENAME COLUMN return_date TO preferred_time;

-- 5. Update reviews
ALTER TABLE IF EXISTS reviews 
  RENAME COLUMN car_id TO property_id;

-- 6. Update agency_settings
ALTER TABLE agency_settings
  RENAME COLUMN stats_cars TO stats_properties;

ALTER TABLE agency_settings
  RENAME COLUMN stats_rentals TO stats_sold;

-- Update Luxora Default Settings
UPDATE agency_settings SET
  business_name = 'Luxora',
  tagline = 'Discover Your Dream Home.',
  hero_title = 'Find Your Perfect Sanctuary.',
  hero_subtitle = 'Experience the pinnacle of luxury living with our exclusive collection of premium properties and estates.',
  phone = '+1 (555) 789-0123',
  email = 'contact@luxora.com',
  address = 'Beverly Hills, CA',
  working_hours = 'Mon — Sat, 9am — 7pm',
  stats_properties = 150,
  stats_sold = 1200
WHERE id = 'default';

-- 7. Update Indexes
DROP INDEX IF EXISTS idx_cars_type;
DROP INDEX IF EXISTS idx_cars_brand;
DROP INDEX IF EXISTS idx_cars_location;
DROP INDEX IF EXISTS idx_bookings_user_id;
DROP INDEX IF EXISTS idx_reviews_car_id;

CREATE INDEX IF NOT EXISTS idx_properties_type ON properties(type);
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(property_status);
CREATE INDEX IF NOT EXISTS idx_inquiries_user_id ON inquiries(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_property_id ON reviews(property_id);
