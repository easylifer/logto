const paywall = {
  applications:
    '{{count, number}}個の<planName/>アプリケーション制限に達しました。チームのニーズに対応するため、プランをアップグレードしてください。サポートが必要な場合は、お気軽に<a>お問い合わせ</a>ください。',
  applications_other:
    '{{count, number}}個の<planName/>アプリケーション制限に達しました。チームのニーズに対応するため、プランをアップグレードしてください。サポートが必要な場合は、お気軽に<a>お問い合わせ</a>ください。',
  machine_to_machine_feature:
    'Switch to the <strong>Pro</strong> plan to gain extra machine-to-machine applications and enjoy all premium features. <a>Contact us</a> if you have questions.',
  machine_to_machine:
    '{{count, number}}個の<planName/>マシン間アプリケーション制限に達しました。チームのニーズに対応するため、プランをアップグレードしてください。サポートが必要な場合は、お気軽に<a>お問い合わせ</a>ください。',
  machine_to_machine_other:
    '{{count, number}}個の<planName/>マシン間アプリケーション制限に達しました。チームのニーズに対応するため、プランをアップグレードしてください。サポートが必要な場合は、お気軽に<a>お問い合わせ</a>ください。',
  resources:
    '{{count, number}}の<planName/> APIリソース制限に達しました。チームのニーズに合わせてプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  resources_other:
    '{{count, number}}の<planName/> APIリソース制限に達しました。チームのニーズに合わせてプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  scopes_per_resource:
    '{{count, number}}の<planName/> APIリソースあたりの許可制限に達しました。拡張するには今すぐアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  scopes_per_resource_other:
    '{{count, number}}の<planName/> APIリソースあたりの許可制限に達しました。拡張するには今すぐアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  custom_domain:
    'カスタムドメインの機能を解除するには、<strong>Hobby</strong>または<strong>Pro</strong>プランにアップグレードしてください。何かお手伝いが必要な場合は、お気軽に<a>お問い合わせ</a>ください。',
  social_connectors:
    '{{count, number}}の<planName/>ソーシャルコネクタ制限に達しました。チームのニーズに合わせて有料プランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  social_connectors_other:
    '{{count, number}}の<planName/>ソーシャルコネクタ制限に達しました。チームのニーズに合わせて有料プランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  standard_connectors_feature:
    'OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成し、無制限のソーシャルコネクタとすべてのプレミアム機能を利用するには、<strong>Hobby</strong>プランまたは<strong>Pro</strong>プランにアップグレードしてください。どんなお手伝いが必要でも、お気軽に<a>お問い合わせ</a>ください。',
  standard_connectors:
    '{{count, number}}の<planName/>ソーシャルコネクタ制限に達しました。チームのニーズに合わせて有料プランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  standard_connectors_other:
    '{{count, number}}の<planName/>ソーシャルコネクタ制限に達しました。チームのニーズに合わせて有料プランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  standard_connectors_pro:
    '{{count, number}}の<planName/>スタンダードコネクタ制限に達しました。チームのニーズに合わせてエンタープライズプランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  standard_connectors_pro_other:
    '{{count, number}}の<planName/>スタンダードコネクタ制限に達しました。チームのニーズに合わせてエンタープライズプランにアップグレードして、OIDC、OAuth 2.0、およびSAMLプロトコルを使用して独自のコネクタを作成できるようにしましょう。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  roles:
    '{{count, number}}の<planName/>ロール制限に達しました。追加のロールと権限を追加するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  roles_other:
    '{{count, number}}の<planName/>ロール制限に達しました。追加のロールと権限を追加するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  machine_to_machine_roles:
    '{{count, number}} machine-to-machine role of <planName/> limit reached. Upgrade plan to add additional roles and permissions. Feel free to <a>contact us</a> if you need any assistance.',
  machine_to_machine_roles_other:
    '{{count, number}} machine-to-machine roles of <planName/> limit reached. Upgrade plan to add additional roles and permissions. Feel free to <a>contact us</a> if you need any assistance.',
  scopes_per_role:
    '{{count, number}}の<planName/>ロールあたりの許可制限に達しました。追加のロールと権限を追加するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  scopes_per_role_other:
    '{{count, number}}の<planName/>ロールあたりの許可制限に達しました。追加のロールと権限を追加するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  hooks:
    '{{count, number}}の<planName/>ウェブフック制限に達しました。追加のウェブフックを作成するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  hooks_other:
    '{{count, number}}の<planName/>ウェブフック制限に達しました。追加のウェブフックを作成するにはプランをアップグレードしてください。<a>お問い合わせ</a>は何かお手伝いが必要な場合はお気軽にどうぞ。',
  mfa: 'セキュリティを確認するためにMFAを解除して有料プランにアップグレードしてください。ご質問があれば、<a>お問い合わせください</a>。',
  organizations:
    'Unlock organizations by upgrading to a paid plan. Don’t hesitate to <a>contact us</a> if you need any assistance.',
};

export default Object.freeze(paywall);
