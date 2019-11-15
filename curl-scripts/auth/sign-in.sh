# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://sei-library-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASS}"'"
  }
}'
echo
