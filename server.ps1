# Simple PowerShell HTTP Server for local development
$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Local server running at: http://localhost:$port/"
    Write-Host "Press Ctrl+C to stop the server."
    
    while ($listener.IsListening) {
        $response = $null
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            # Clean path and handle defaults
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") {
                $urlPath = "/index.html"
            }
            
            # Resolve path relative to current directory
            $cleanPath = $urlPath.TrimStart('/')
            $filePath = [System.IO.Path]::Combine((Get-Location).Path, $cleanPath)
            
            if (Test-Path $filePath -PathType Leaf) {
                # Determine content type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = "application/octet-stream"
                
                switch ($ext) {
                    ".html" { $contentType = "text/html; charset=utf-8" }
                    ".css"  { $contentType = "text/css; charset=utf-8" }
                    ".js"   { $contentType = "application/javascript; charset=utf-8" }
                    ".json" { $contentType = "application/json; charset=utf-8" }
                    ".jpg"  { $contentType = "image/jpeg" }
                    ".jpeg" { $contentType = "image/jpeg" }
                    ".png"  { $contentType = "image/png" }
                    ".gif"  { $contentType = "image/gif" }
                    ".svg"  { $contentType = "image/svg+xml" }
                    ".ico"  { $contentType = "image/x-icon" }
                    ".mp4"  { $contentType = "video/mp4" }
                }
                
                $response.ContentType = $contentType
                
                # Read and write file content
                [byte[]]$bytes = [System.IO.File]::ReadAllBytes($filePath)
                Write-Host "Serving: $cleanPath | Size: $($bytes.Length) bytes"
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                # 404 response
                $response.StatusCode = 404
                $response.ContentType = "text/plain; charset=utf-8"
                [byte[]]$bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            
            $response.Close()
        }
        catch {
            Write-Host "Warning: Connection error or aborted request: $_"
            if ($response -ne $null) {
                try { $response.Close() } catch {}
            }
        }
    }
}
catch {
    Write-Error $_.Exception.Message
}
finally {
    if ($listener -ne $null) {
        $listener.Stop()
        $listener.Close()
    }
}
