const application = {
  invalid_type: 'Только приложения типа "от машины к машине" могут иметь связанные роли.',
  role_exists: 'Роль с идентификатором {{roleId}} уже добавлена в это приложение.',
  invalid_role_type:
    'Невозможно назначить роль типа "пользователь" для приложения типа "от машины к машине".',
  invalid_third_party_application_type:
    'Только традиционные веб-приложения могут быть помечены как приложения сторонних разработчиков.',
  third_party_application_only:
    'Эта функция доступна только для приложений сторонних разработчиков.',
  user_consent_scopes_not_found: 'Недействительные области согласия пользователя.',
  protected_app_metadata_is_required: 'Требуется защищенная метаданные приложения.',
  /** UNTRANSLATED */
  protected_app_not_configured: 'Protected app provider is not configured.',
  /** UNTRANSLATED */
  cloudflare_unknown_error: 'Got unknown error when requesting Cloudflare API',
};

export default Object.freeze(application);
