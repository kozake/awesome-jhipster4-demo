package com.github.kozake.sh.jhipster4.awesome.demo.repository;

import com.github.kozake.sh.jhipster4.awesome.demo.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
