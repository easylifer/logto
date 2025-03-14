const application_details = {
  page_title: "Détails de l'application",
  back_to_applications: 'Retour aux applications',
  check_guide: 'Consulter le guide',
  settings: 'Paramètres',
  settings_description:
    "Les applications sont utilisées pour identifier vos applications dans Logto pour OIDC, l'expérience de connexion, les journaux d'audit, etc.",
  /** UNTRANSLATED */
  endpoints_and_credentials: 'Endpoints & Credentials',
  /** UNTRANSLATED */
  endpoints_and_credentials_description:
    'Use the following endpoints and credentials to set up the OIDC connection in your application.',
  /** UNTRANSLATED */
  refresh_token_settings: 'Refresh token',
  /** UNTRANSLATED */
  refresh_token_settings_description: 'Manage the refresh token rules for this application.',
  application_roles: 'Rôles',
  machine_logs: 'Journaux de machine',
  application_name: "Nom de l'application",
  application_name_placeholder: 'Mon App',
  description: 'Description',
  description_placeholder: 'Entrez la description de votre application',
  config_endpoint: 'Point de configuration du fournisseur OpenID',
  authorization_endpoint: "Point de terminaison d'autorisation",
  authorization_endpoint_tip:
    "Le point de terminaison pour effectuer l'authentification et l'autorisation. Il est utilisé pour <a>l'authentification</a> OpenID Connect.",
  /** UNTRANSLATED */
  show_endpoint_details: 'Show endpoint details',
  /** UNTRANSLATED */
  hide_endpoint_details: 'Hide endpoint details',
  logto_endpoint: 'Endpoint Logto',
  application_id: "ID de l'application",
  application_id_tip:
    "L'identifiant d'application unique généralement généré par Logto. Il signifie également <a>client_id</a> dans OpenID Connect.",
  application_secret: "Secret de l'application",
  redirect_uri: 'URI de redirection',
  redirect_uris: 'URIs de redirection',
  redirect_uri_placeholder: 'https://votre.site.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    "L'URI de redirection après la connexion d'un utilisateur (qu'elle soit réussie ou non). Voir OpenID Connect <a>AuthRequest</a> pour plus d'informations.",
  post_sign_out_redirect_uri: 'URI de redirection post-déconnexion',
  post_sign_out_redirect_uris: 'URI de redirection après la déconnexion',
  post_sign_out_redirect_uri_placeholder: 'https://votre.site.com/home',
  post_sign_out_redirect_uri_tip:
    "L'URI de redirection après la déconnexion de l'utilisateur (facultatif). Cela peut n'avoir aucun effet pratique dans certains types d'applications.",
  cors_allowed_origins: 'Origines CORS autorisées',
  cors_allowed_origins_placeholder: 'https://votre.site.com',
  cors_allowed_origins_tip:
    "Par défaut, toutes les origines des URI de redirection seront autorisées. En général, aucune action n'est requise pour ce champ. Consultez la documentation <a>MDN</a> pour des informations détaillées.",
  token_endpoint: 'Point de terminaison du jeton',
  user_info_endpoint: "Point de terminaison de l'utilisateur",
  enable_admin_access: "Activer l'accès administrateur",
  enable_admin_access_label:
    "Activer ou désactiver l'accès à l'API de gestion. Une fois activé, vous pouvez utiliser des jetons d'accès pour appeler l'API de gestion au nom de cette application.",
  always_issue_refresh_token: 'Toujours émettre le Refresh Token.',
  always_issue_refresh_token_label:
    "En activant cette configuration, Logto pourra toujours émettre des Refresh Tokens, indépendamment de la présentation ou non de la demande d'authentification `prompt=consent`. Cependant, cette pratique est découragée sauf si nécessaire, car elle n'est pas compatible avec OpenID Connect et peut potentiellement causer des problèmes.",
  refresh_token_ttl: 'Durée de vie du Refresh Token en jours',
  refresh_token_ttl_tip:
    "La durée pendant laquelle un Refresh Token peut être utilisé pour demander de nouveaux jetons d'accès avant qu'il n'expire et devienne invalide. Les demandes de jeton étendront la durée de vie du Refresh Token à cette valeur.",
  rotate_refresh_token: 'Tourner le Refresh Token',
  rotate_refresh_token_label:
    "Lorsqu'elle est activée, Logto émettra un nouveau Refresh Token pour les demandes de jeton lorsque 70% de la durée de vie (TTL) d'origine est écoulée ou que certaines conditions sont remplies. <a>En savoir plus</a>",
  delete_description:
    "Cette action ne peut être annulée. Elle supprimera définitivement l'application. Veuillez entrer le nom de l'application <span>{{nom}}</span> pour confirmer.",
  enter_your_application_name: 'Entrez le nom de votre application',
  application_deleted: "L'application {{name}} a été supprimée avec succès.",
  redirect_uri_required: 'Vous devez entrer au moins un URI de redirection.',
  branding: {
    /** UNTRANSLATED */
    branding: 'Branding',
    /** UNTRANSLATED */
    branding_description:
      "Customize your application's display name and logo on the consent screen.",
    /** UNTRANSLATED */
    more_info: 'More info',
    /** UNTRANSLATED */
    more_info_description: 'Offer users more details about your application on the consent screen.',
    /** UNTRANSLATED */
    display_name: 'Display name',
    /** UNTRANSLATED */
    display_logo: 'Display logo',
    /** UNTRANSLATED */
    display_logo_dark: 'Display logo (dark)',
    /** UNTRANSLATED */
    terms_of_use_url: 'Application terms of use URL',
    /** UNTRANSLATED */
    privacy_policy_url: 'Application privacy policy URL',
  },
  roles: {
    name_column: 'Rôle',
    description_column: 'Description',
    assign_button: 'Attribuer des rôles',
    delete_description:
      'Cette action supprimera ce rôle de cette application machine-to-machine. Le rôle lui-même existera toujours, mais il ne sera plus associé à cette application machine-to-machine.',
    deleted: '{{name}} a été supprimé(e) avec succès de cet utilisateur.',
    assign_title: 'Attribuer des rôles à {{name}}',
    assign_subtitle: 'Autoriser {{name}} à un ou plusieurs rôles',
    assign_role_field: 'Attribuer des rôles',
    role_search_placeholder: 'Rechercher par nom de rôle',
    added_text: '{{value, number}} ajouté(s)',
    assigned_app_count: '{{value, number}} applications',
    confirm_assign: 'Assigner des rôles',
    role_assigned: 'Rôle(s) attribué(e)s avec succès',
    search: 'Rechercher par nom de rôle, description ou ID',
    empty: 'Aucun rôle disponible',
  },
};

export default Object.freeze(application_details);
