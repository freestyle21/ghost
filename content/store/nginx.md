server {
  listen       80;
  server_name  baidu.com;

  location  / {
    proxy_pass http://127.0.0.1:8001;
    proxy_set_header Host $host:80;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Formarded-For $proxy_add_x_forwarded_for;
    root   html;
    index  index.html index.htm;
    client_max_body_size 5m;
  }
  location ^~ /d3 {
    proxy_pass http://127.0.0.1:8004;
    proxy_set_header   Host       $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_redirect     off;
    proxy_connect_timeout      20;
    proxy_send_timeout         30;
    proxy_read_timeout         10;
    proxy_buffer_size          4k;
    proxy_buffers              4 32k;
    proxy_busy_buffers_size    64k;
    proxy_temp_file_write_size 64k;
  }

  location ^~ /fit {
    proxy_pass http://127.0.0.1:8002;
    proxy_set_header   Host       $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_redirect     off;

    proxy_connect_timeout      20;
    proxy_send_timeout         30;
    proxy_read_timeout         10;
    proxy_buffer_size          4k;
    proxy_buffers              4 32k;
    proxy_busy_buffers_size    64k;
    proxy_temp_file_write_size 64k;
  }
  location ^~ /baseketball/ {
    proxy_pass http://127.0.0.1:8003;
    proxy_set_header   Host       $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_redirect     off;
    proxy_connect_timeout      20;
    proxy_send_timeout         30;
    proxy_read_timeout         10;
    proxy_buffer_size          256k;
    proxy_buffers              4 256k;
    proxy_busy_buffers_size    256k;
    proxy_temp_file_write_size 256k;
  }
}
