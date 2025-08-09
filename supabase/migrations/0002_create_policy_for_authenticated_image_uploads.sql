CREATE POLICY "Authenticated users can upload to public_assets"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'public_assets' );