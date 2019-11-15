# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://sei-library-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
