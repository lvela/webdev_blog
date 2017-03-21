json.extract! article, :id, :title, :body, :created_at, :updated_at
json.comments article.comments, :id, :body, :created_at
json.url article_url(article, format: :json)
