-- Migration to add missing columns to the cars table
-- Run this in your Supabase SQL Editor: 
-- https://supabase.com/dashboard/project/itsyagaubxhhefduylvw/sql/new

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'condition') THEN
        ALTER TABLE cars ADD COLUMN condition VARCHAR(50) DEFAULT 'New';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'year') THEN
        ALTER TABLE cars ADD COLUMN year INT DEFAULT 2024;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'transmission') THEN
        ALTER TABLE cars ADD COLUMN transmission VARCHAR(50) DEFAULT 'Automatic';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'seats') THEN
        ALTER TABLE cars ADD COLUMN seats INT DEFAULT 4;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'acceleration') THEN
        ALTER TABLE cars ADD COLUMN acceleration VARCHAR(50);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'top_speed') THEN
        ALTER TABLE cars ADD COLUMN top_speed VARCHAR(50);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'engine') THEN
        ALTER TABLE cars ADD COLUMN engine VARCHAR(100);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'features') THEN
        ALTER TABLE cars ADD COLUMN features TEXT[];
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'specifications') THEN
        ALTER TABLE cars ADD COLUMN specifications JSONB;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'images') THEN
        ALTER TABLE cars ADD COLUMN images TEXT[];
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'host_name') THEN
        ALTER TABLE cars ADD COLUMN host_name VARCHAR(255);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'host_avatar') THEN
        ALTER TABLE cars ADD COLUMN host_avatar TEXT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'host_location') THEN
        ALTER TABLE cars ADD COLUMN host_location VARCHAR(255);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'availability_days') THEN
        ALTER TABLE cars ADD COLUMN availability_days TEXT[] DEFAULT ARRAY['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cars' AND column_name = 'type') THEN
        ALTER TABLE cars DROP COLUMN type;
    END IF;
END $$;
