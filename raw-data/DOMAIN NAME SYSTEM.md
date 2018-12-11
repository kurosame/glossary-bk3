## category

other

## titles

Domain Name System
DNS

## description

ドメイン名とネット上のサーバの IP アドレスを紐付ける仕組み  
DNS が無い時代は、hosts で IP アドレスとドメイン名を紐づけていた  
管理と運用が大変なので、DNS を使うようになる

### 名前解決の流れ

1. ブラウザの URL バーで実行
1. PC 内のスタブリゾルバから DNS サーバに問い合わせる
1. 問い合わせに対して、フルサービスリゾルバ（DNS キャッシュサーバ）がキャッシュがあれば IP アドレスを返す
1. キャッシュが無ければ、フルサービスリゾルバは、ルート DNS サーバ（世界に 13 群ある）に問い合わせる
1. ルート DNS サーバから下層（ドメインツリー構造）に探っていく  
   例：jp -> co -> example
1. 見つかった IP アドレスをブラウザまで返す
1. ブラウザがその IP アドレスにアクセス