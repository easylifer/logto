const quota_table = {
  quota: {
    title: 'Basiques',
    base_price: 'Prix de base',
    mau_limit: 'Limite de MAU',
    included_tokens: 'Jetons inclus',
  },
  application: {
    title: 'Applications',
    total: 'Total des applications',
    m2m: 'Machine-à-machine',
  },
  resource: {
    title: 'Ressources API',
    resource_count: 'Nombre de ressources',
    scopes_per_resource: 'Autorisations par ressource',
  },
  branding: {
    title: 'Interface utilisateur et branding',
    custom_domain: 'Domaine personnalisé',
    custom_css: 'CSS personnalisé',
    app_logo_and_favicon: "Logo et favicon de l'application",
    dark_mode: 'Mode sombre',
    i18n: 'Internationalisation',
  },
  user_authn: {
    title: 'Authentification des utilisateurs',
    omni_sign_in: 'Connexion omnicanale',
    password: 'Mot de passe',
    passwordless: 'Sans mot de passe - Email et SMS',
    email_connector: 'Connecteur email',
    sms_connector: 'Connecteur SMS',
    social_connectors: 'Connecteurs sociaux',
    standard_connectors: 'Connecteurs standards',
    built_in_email_connector: 'Connecteur email intégré',
    mfa: 'MFA',
    sso: 'SSO entreprise',
  },
  user_management: {
    title: 'Gestion des utilisateurs',
    user_management: 'Gestion des utilisateurs',
    roles: 'Rôles',
    machine_to_machine_roles: 'Rôles machine-à-machine',
    scopes_per_role: 'Autorisations par rôle',
  },
  audit_logs: {
    title: "Journaux d'audit",
    retention: 'Conservation',
  },
  hooks: {
    title: 'Webhooks',
    hooks: 'Webhooks',
  },
  organizations: {
    title: 'Organisation',
    organizations: 'Organisations',
    monthly_active_organization: 'Organisation active mensuelle',
    allowed_users_per_org: 'Utilisateurs autorisés par organisation',
    invitation: 'Invitation',
    org_roles: "Rôles d'organisation",
    org_permissions: "Permissions d'organisation",
    just_in_time_provisioning: 'Fourniture juste-à-temps',
  },
  support: {
    title: 'Conformité et support',
    community: 'Communauté',
    customer_ticket: 'Ticket de support',
    premium: 'Premium',
    email_ticket_support: 'Support par ticket électronique',
    soc2_report: 'Rapport SOC2',
    hipaa_or_baa_report: 'Rapport HIPAA/BAA',
  },
  unlimited: 'Illimité',
  contact: 'Contact',
  monthly_price: '${{value, number}}/mois',
  days_one: '{{count, number}} jour',
  days_other: '{{count, number}} jours',
  add_on: 'Module complémentaire',
  tier: 'Niveau{{value, number}} : ',
  free_token_limit_tip: 'Gratuit pour {{value}}M jeton émis.',
  paid_token_limit_tip:
    'Gratuit pour {{value}}M jeton émis. Nous pouvons ajouter des frais si vous dépassez {{value}}M jetons une fois que nous aurons finalisé les prix.',
  paid_quota_limit_tip:
    'Nous pouvons facturer des fonctionnalités qui dépassent votre limite de quotas en tant que modules complémentaires une fois que nous aurons finalisé les prix.',
  beta_feature_tip:
    'Gratuit à utiliser pendant la phase bêta. Nous commencerons à facturer une fois que nous aurons finalisé les tarifs des modules complémentaires.',
  usage_based_beta_feature_tip:
    "Gratuit à utiliser pendant la phase bêta. Nous commencerons à facturer une fois que nous aurons finalisé les tarifs basés sur l'usage de l'organisation.",
  beta: 'Bêta',
  add_on_beta: 'Module complémentaire (Bêta)',
  million: '{{value, number}} million',
  mau_tip:
    "MAU (utilisateur actif mensuel) signifie le nombre d'utilisateurs uniques qui ont échangé au moins un jeton avec Logto au cours d'un mois de facturation.",
  tokens_tip:
    "Tous types de jetons émis par Logto, y compris les jetons d'accès, les jetons de rafraîchissement, etc.",
};

export default Object.freeze(quota_table);
