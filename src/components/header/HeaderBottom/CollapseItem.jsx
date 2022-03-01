export const CollapseItem = ({ data }) => {
	return (
		<li className="navigation__collapse-item vertical-menu__item">
			<a href={data && data.link} className="vertical-menu__name">
				{data && data.title}
			</a>
		</li>
	)
}